FROM openjdk:17-jdk-alpine
EXPOSE 8089

# Install wget if not already present
RUN apk add --no-cache wget

# Download the JAR file using Nexus credentials
RUN wget --no-verbose \
    --user=admin \
    --password=09f844b0-b6a5-4567-a1e6-c828cfd7e518 \
    -O tp-foyer-5.0.2.jar \
    http://192.168.1.138:8081/repository/maven-releases/tn/esprit/tp-foyer/5.0.0/tp-foyer-5.0.0.jar

ENTRYPOINT ["java", "-jar", "/tp-foyer-5.0.2.jar"]

#FROM openjdk:17-jdk-alpine
#EXPOSE 8089
#ADD target/tp-foyer-5.0.0.jar tp-foyer-5.0.0.jar
#ENTRYPOINT ["java", "-jar", "/tp-foyer-5.0.0.jar"]
