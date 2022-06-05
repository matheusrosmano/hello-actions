FROM python:3-alpine

COPY ./webhook /
RUN python --version