# Check operation system

CONTAINER_NAME ?= test_chat
CONTAINER_IMAGE ?= test_chat_app

APP_PORT ?= 8080
EXPOSE_PORT = 9090

build:
	@echo "=>Build"
	@docker build --pull -t ${CONTAINER_IMAGE} .

run: clean build
	@echo "=>Run "
	@docker run -d -p ${EXPOSE_PORT}:${APP_PORT} --name ${CONTAINER_NAME} ${CONTAINER_IMAGE}
	@sleep 1

logs:
	@echo "=>Logs"
	@docker logs -f ${CONTAINER_NAME}

HAS_RUNNED := $(shell docker ps | grep ${CONTAINER_NAME})
HAS_EXITED := $(shell docker ps -a | grep ${CONTAINER_NAME})

stop:
ifdef HAS_RUNNED
	@echo "+ $@"
	@docker stop ${CONTAINER_NAME}
endif

start: stop
	@echo "+ $@"
	@docker start ${CONTAINER_NAME}

rm:
ifdef HAS_EXITED
	@echo "+ $@"
	@docker rm ${CONTAINER_NAME}
	@docker image rm ${CONTAINER_IMAGE}
endif

clean: stop rm

.PHONY: all \
	run \
	logs \
	build \
	stop \
	start \
	rm \
	clean \
