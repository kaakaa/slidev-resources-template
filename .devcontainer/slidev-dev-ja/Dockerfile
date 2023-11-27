FROM mcr.microsoft.com/vscode/devcontainers/universal:2-linux

USER root
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends fonts-noto-cjk fonts-noto-color-emoji

USER codespace
