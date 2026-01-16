FROM kasmweb/ubuntu-noble-desktop:1.18.0-rolling-weekly

USER root

# ------------------------------------------------------------
# ######### Customize Container Here ###########
# ------------------------------------------------------------
ENV DEBIAN_FRONTEND=noninteractive

RUN set -eux \
&& apt-get update \
&& sudo apt-get install -y --no-install-recommends \
      glances \
      wget \
      net-tools \
      tcpdump \
      thunderbird \
      libemail-outlook-message-perl \
      libemail-address-perl \
      libimage-exiftool-perl \
      unzip \
      libxml2-utils \
      file \
      pst-utils \
      poppler-utils \
      qpdf \
      p7zip-full \
      binwalk \
      cabextract \
      python3 \
      python3-pip \
      pipx \
      ca-certificates \
      curl \
      netcat-openbsd \
      telnet \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# pipx: put installed CLI tools on PATH for all users
ENV PIPX_HOME=/opt/pipx
ENV PIPX_BIN_DIR=/usr/local/bin
RUN mkdir -p /opt/pipx

RUN pipx install oletools \
 && pipx install peepdf-3 \
 && pipx install msoffcrypto-tool

# ------------------------------------------------------------
# ######### End Customizations ###########
# ------------------------------------------------------------

RUN chown -R 1000:0 /home/kasm-user \
 && chmod -R g+w /home/kasm-user

USER 1000
