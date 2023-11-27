FROM mcr.microsoft.com/devcontainers/javascript-node:0-18-bullseye

USER root
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends fonts-noto

USER codespace
