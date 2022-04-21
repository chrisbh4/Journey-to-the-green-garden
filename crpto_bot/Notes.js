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





*/
