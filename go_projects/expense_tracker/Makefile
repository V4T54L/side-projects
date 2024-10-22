.PHONY: build setup setup_dotenv clean

setup: setup_dotenv build
	@mkdir -p ./db
	@touch ./db/db.csv
	@echo "run: ./expense_tracker"

build:
	@go build -o ./expense_tracker ./cmd/cli/main.go

setup_dotenv:
	@cat .env.example > .env

clean:
	@rm -rf ./db
	@rm ./expense_tracker
	@rm ./.env