package com.learn.chat_app_backend.playload;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MessageRequest {

    private String content;
    private String sender;
    private String roomId;


}
