/*
* Docker Commands
        Downlowad data time frame instances
            docker-compose run freqtrade download-data --exchange binance -t 15m
        -Runs backtesting for coins :
             docker-compose run freqtrade backtesting --datadir user_data/data/binance --export trades --stake-amount 100 -s (Name of Strategy) -i 15m
             docker-compose run freqtrade backtesting --datadir user_data/data/binance --export trades --stake-amount 100 -s BBRSINaiveStrategy -i 15m
        - Creates a plot Graph of the single coins
            docker-compose run freqtrade plot-dataframe --strategy (Name of Strategy) -p IOTA/USDT -i 15m
        - Run Strategy thorugh Hyperopt tests with Epochs
            Command Line :
            docker-compose run freqtrade hyperopt -s BBRSIStrategy --epochs 5000 --hyperopt-loss SharpeHyperOptLoss


* Hyperopt Methods
- OnlyProfitHyperOptLoss - takes only amount of profit into consideration.
- ShortTradeDurHyperOptLoss - (default legacy Freqtrade hyperoptimization loss function) - Mostly for short trade duration and avoiding losses.
- SharpeHyperOptLoss - optimizes Sharpe Ratio calculated on trade returns relative to standard deviation.
- SharpeHyperOptLossDaily - optimizes Sharpe Ratio calculated on daily trade returns relative to standard deviation.
- SortinoHyperOptLoss - optimizes Sortino Ratio calculated on trade returns relative to downside standard deviation.
- SortinoHyperOptLossDaily - optimizes Sortino Ratio calculated on daily trade returns relative to downside standard deviation.
- MaxDrawDownHyperOptLoss - Optimizes Maximum drawdown.
- CalmarHyperOptLoss - Optimizes Calmar Ratio calculated on trade returns relative to max drawdown.
- ProfitDrawDownHyperOptLoss - Optimizes by max Profit & min Drawdown objective. DRAWDOWN_MULT variable within the hyperoptloss file can be adjusted to be stricter or more flexible on drawdown purposes.




*/
