
<article class="w-full max-w-17 ac-start px-1 sm-px-4 pt-4 pb-8 font-sans  ">
  <h2 class="text-lg ml-8 py-4">
    <span>Setup instructions for</span>
    <span class="text-violet-700"><%= @cert.hostname %></span>
  </h2>

  <section class="  mx-8 p-4px pb-4 rounded-lg bg-white  mb-1  flex justify-end flex-col rounded-lg    overlfow-x-hidden ">
    <header class=" px-5 pt-2   text-md  flex  ">
      <div class='relative top-2 ' >
        <.new_status_indicator bool={@cert.configured}  />
      </div>
      <h3>
        Confirm domain ownership
        <%= unless is_wc(@cert) do %>
          <em class="inline-flex bg-gray-200 text-violet-600 text-roman text-xs rounded-lg tracking-wide  mt-3 p-1 ml-2">optional</em>
        <% end %>
      </h3>
    </header>

    <div class="mx-3">
      <p class="leading-relaxed  px-6 py-4 text-gray-500 font-light text-sm font-sans ">
        <span>Create a</span>
        <em class="bg-gray-200 text-violet-400 font-bold px-1"><%= @cert.dns_validation_hostname %></em>
        <span>CNAME record for hostname verification,</span>
        <%= if is_wc(@cert) do %>
          this is required before we can generate a wildcard certificate.
        <% else %>
          which generates a certificate before you direct traffic to your application. You can
          skip this step as long as it's OK to briefly see some errors on your site.
        <% end %>
      </p>

      <form class=" flex  w-11/12 pb-4 justify-around relative left-7">
        <label class="relative text:bold text:uppercase text:2s tracking:xl">
          <span class="sr-only">CNAME record name</span>
          <div class="flex border ">
            <input id="acme-dns-name" type="text" class="w-full h-8 font-mono border-gray-300" data-autoselect="" value={get_copy_ready_hostname(@cert.dns_validation_hostname, @cert.domain, @cert)} aria-label={"CNAME record name: #{get_copy_ready_hostname(@cert.dns_validation_hostname, @cert.domain, @cert)}"} readonly="" />
            <.copy_input_text_to_clipboard id="copy-acme-dns-name" data-input-selector="#acme-dns-name" class="border border-l-0 flex items-center justify-center px-2 text-white w-12" />
          </div>
        </label>
        <span class="text:book text:sans select:off transform rotate:90 lg:rotate:0 flex items-center">→</span>
        <label class="relative text:bold text:uppercase text:2s tracking:xl">
          <span class="sr-only">CNAME record value</span>
          <div class="flex">
            <input id="acme-dns-value" type="text" class="w-full h-9 font-mono border-gray-300" data-autoselect="" value={String.replace(@cert.dns_validation_target, "*", "") <> "."} aria-label="CNAME record value:" readonly="" />
            <.copy_input_text_to_clipboard id="copy-acme-dns-value" data-input-selector="#acme-dns-value" class="border border-l-0 flex items-center justify-center px-2 text-white w-12" />
          </div>
        </label>
      </form>
    </div>
  </section>

  <section class="  mx-8 px-4 pb-4  rounded-lg bg-white  overflow-x-auto mb-1  flex flex-col rounded-lg mt-7  overflow-x-hidden  ">
    <header class=" px-2 pt-3 text-md rounded-lg  flex ">
    <div>
      <.new_status_indicator bool={@cert.configured}  />
    </div>
      <h3>
        Direct visitors to application
      </h3>
    </header>
    <div>
      <p class=" relative left-2 p-4 text-sm text-gray-500 leading-tight ">
        Add DNS entries to connect visitors to your Fly application.
      </p>

      <%= for ip <- @ip_addresses do %>
        <form class="flex justify-evenly mb-2 ">
          <label class="relative text:bold text:uppercase text:2s tracking:xl">
            <span class="sr-only">CNAME record name</span>
            <div class="flex ">
              <div class="border border-r-0 flex items-center justify-center px-2  h-8 " style="width: 50px">
                <%= if ip.type == "v6", do: "AAAA", else: "A" %>
              </div>
              <input id={"ip-record-#{ip.id}"} type="text" class="w-7/12 h-8 font-mono border-gray-300  " data-autoselect="" value={get_copy_ready_hostname(@cert.hostname, @cert.domain, @cert)} aria-label={"Record name: #{get_copy_ready_hostname(@cert.hostname, @cert.domain, @cert)}"} readonly="" />
              <.copy_input_text_to_clipboard id={"copy-ip-record-#{ip.id}"} data-input-selector={"#ip-record-#{ip.id}"} class="border border-l-0 flex items-center justify-center px-2 text-white w-12" />
            </div>
          </label>
          <span class="text:book text-sans select-none relative right-6 2xl:right-7">→</span>
          <label class="relative text:bold text:uppercase text:2s tracking:xl">
            <span class="sr-only">Record value</span>
            <div class="flex relative right-5">
              <input id={"ip-value-#{ip.id}"} type="text" class="w-10/12 h-8 font-mono border-gray-300  " data-autoselect="" value={ip.address} aria-label={"CNAME record value: #{@app_id}.fly.dev."} readonly="" />
              <.copy_input_text_to_clipboard id={"copy-ip-value-#{ip.id}"} data-input-selector={"#ip-value-#{ip.id}"} class="border border-l-0 flex items-center justify-center px-2 text-white w-12" />
            </div>
          </label>
        </form>
      <% end %>
    </div>
  </section>

  <%= unless Enum.empty?(@cert.issued ) do %>
    <section class="mx-8 p-4px pb-4  rounded-lg bg-white  overflow-x-hidden overflow-y-auto mb-1  flex flex-col rounded-lg       mt-7">
      <header class="px-5 py-2 text-md rounded-l flex  ">
        <div>
          <.new_status_indicator bool={@cert.configured}  />
        </div>
        <h3>Certificates</h3>
      </header>

      <ul class="  mx-5 p-2  ">
        <%= for cert <- @cert.issued do %>
          <li class="overflow-x-auto flex justify-between p-2  border-b-2 border-violet-300  fontFamily-sans font-sans">
            <strong class={"uppercase p-5px rounded-lg border content-end bg-#{color(cert)}-500 text-gray-500 text-heavy text-uppercase fontFamily-sans text-xs tracking-wide"}>
              <%= cert.type %>
            </strong>
            <span class="text-gray-500">
              <%= if expired?(cert), do: "expired at", else: "valid until" %>
              <strong class="text-bold text-black ml-1">
                     <%= format_date(cert.expires_at) %>
              </strong>
            </span>
          </li>
        <% end %>
      </ul>
    </section>
  <% end %>

   <footer class="relative flex   mt-5  w-full ml-7  ">
    <form method="dialog" data-controller="confirm-dialog" phx-submit="delete" phx-target={@myself}>
      <a href="#" phx-click="refresh-cert" phx-target={@myself} class="button-sm button-outline bg-white" phx-disable-with="Checking...">Check again</a>
      <button data-confirm="Are you sure?" data-action="click->confirm-dialog#confirm" class=" button-sm button-outline text-red-500 ml-5px  bg-white  hover:text-white hover:bg-red-500">
        Delete
      </button>
    </form>
  </footer>


</article>
