certs:
	mkdir -p proxy/certs && cd proxy/certs && mkcert \
	  -cert-file dev.skiltmakeren.no.crt \
  	  -key-file dev.skiltmakeren.no.key \
  	  dev.skiltmakeren.no && \
      mkcert --install
