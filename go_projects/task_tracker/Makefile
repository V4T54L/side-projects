.PHONY: build setup clean

setup: build
	@mkdir -p ./build/db
	@touch ./build/db/task_tracker.json
	@echo "run: cd build"
	@echo "run: ./task_tracker"

build:
	@mkdir -p ./build
	@go build -o ./build/task_tracker ./cmd/cli/main.go

clean:
	@rm -rf ./build