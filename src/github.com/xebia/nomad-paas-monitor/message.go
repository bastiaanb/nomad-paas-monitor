package main

type Message struct {
  ID  string  `json:"id"`
  Timestamp int64 `json:"timestamp"`
  Author  string  `json:"author"`
  Message string  `json:"message"`
}
