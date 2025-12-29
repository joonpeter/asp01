# 1. Java 17 런타임
FROM eclipse-temurin:17-jdk-jammy

# 2. 컨테이너 작업 디렉토리
WORKDIR /app

# 3. board-api 빌드 결과 JAR 복사
# (Gradle 기준)
COPY board-api/build/libs/*.jar app.jar

# 4. App Service 기본 포트
EXPOSE 8080

# 5. Spring Boot 실행
ENTRYPOINT ["java","-jar","/app/app.jar"]
