run-dev:
	docker-compose -f "docker-compose.dev.yml" up --build --watch

stop-dev:
	docker-compose -f "docker-compose.dev.yml" down