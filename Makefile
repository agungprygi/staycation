DOCKER_COMPOSE = python3.10 $(shell which docker-compose)

run-dev:
	$(DOCKER_COMPOSE) -f "docker-compose.dev.yml" up -d

stop-dev:
	$(DOCKER_COMPOSE) -f "docker-compose.dev.yml" down