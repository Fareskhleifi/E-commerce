package com.ahmeddev.fullstack_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan(basePackages = "com.ahmeddev.fullstack_backend")
@EnableJpaRepositories(basePackages = "com.ahmeddev.fullstack_backend.repository")
public class FullstackBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(FullstackBackendApplication.class, args);
	}
	public WebMvcConfigurer configure(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*");
			}
		};
	}
}
