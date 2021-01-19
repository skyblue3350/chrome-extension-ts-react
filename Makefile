DEV_IMAGE_NAME=extentions_dev
DEV_CONTAINER_NAME=extentions_dev

docker-build:
	docker build -t ${DEV_IMAGE_NAME} ./

docker-rm:
	docker rm -f ${DEV_CONTAINER_NAME} | :

docker-run: docker-rm
	docker run -d -it --name ${DEV_CONTAINER_NAME} \
		-w /app \
		-v $(CURDIR)/:/app \
		${DEV_IMAGE_NAME} \
		bash

docker-shell:
	docker exec -it ${DEV_CONTAINER_NAME} bash

docker-dev: docker-run
	docker exec -it ${DEV_CONTAINER_NAME} npm run dev

docker-prod: docker-run
	docker exec -it ${DEV_CONTAINER_NAME} npm run prod

docker-lint: docker-run
	docker exec -it ${DEV_CONTAINER_NAME} npm run lint