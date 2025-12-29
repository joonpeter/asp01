# 1. Java 17 런타임
FROM eclipse-temurin:17-jdk-jammy

# 2. 작업 디렉토리
WORKDIR /app

# 3. Maven 빌드 결과 JAR 복사
COPY target/*.jar app.jar

# 4. App Service 기본 포트
EXPOSE 8080

# 5. Spring Boot 실행
ENTRYPOINT ["java","-jar","/app/app.jar"]
