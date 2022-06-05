docker-banco-up:
	command docker-compose up -d

docker-banco-down:
	command docker-compose down

docker-prune-with-volumes:
	command docker system prune -af --volumes