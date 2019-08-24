package com.linkedcour.monapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration;
import org.springframework.data.mongodb.ReactiveMongoDatabaseFactory;

@SpringBootApplication(exclude = MongoReactiveDataAutoConfiguration.class)
public class MonappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MonappApplication.class, args);
	}

}
