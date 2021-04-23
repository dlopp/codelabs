FROM golang:1.16-alpine as claat

RUN apk add --no-cache \
    git && \
    go get github.com/googlecodelabs/tools/claat

ENTRYPOINT ["claat"]