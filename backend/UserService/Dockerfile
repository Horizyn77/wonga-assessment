FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY backend .

RUN dotnet restore AuthSystem.sln

RUN dotnet publish UserService/UserService.csproj \
    -c Release \
    -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 5001

ENTRYPOINT ["dotnet", "UserService.dll"]