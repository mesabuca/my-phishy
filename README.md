
# Phishy Assignment
Projeyi calistirmak icin oncelikle su bagimliliklarini kurmaniz gerekmektedir.
- Docker
- minikube
- kubectl

# Kurulum

Kurulum icin sirasi ile su adimlari izleyin
1. Minikube baslat

```bash
minikube start
```
2. Postgres namespace'i olusturun ve minikube cluster'ina kurun ve kontrol edin

```bash
kubectl create namespace postgres
kubectl apply -f k8s/postgres.yaml -n postgres
kubectl get pod -n postgres
```

3. Redis namespace'i olusturun ve minikube cluster'ina kurun

```bash
kubectl create namespace redis
kubectl apply -f k8s/redis.yaml -n redis
kubectl get pod -n redis
```

4. Phishy core api'i icin namespace olusturun ve minikube cluster'ina kurun

```bash
kubectl create namespace phishy
kubectl apply -f k8s/phishy.yaml -n phishy
kubectl get pod -n phishy
```

5. Phishy worker api'i icin namespace olusturun ve minikube cluster'ina kurun

```bash
kubectl create namespace phishy-worker
kubectl apply -f k8s/phishy-worker.yaml -n phishy-worker
kubectl get pod -n phishy-worker
```

Ve son olarakda locale'inizden istek atabilmeniz icin port forwarding yapacagiz
```bash
kubectl port-forward svc/phishy 8080:80 -n phishy
```
## Optional
Eger redisi `redis-comander` gibi bir uygulamadan takip etmek istiyorsaniz kubernates deki redisinde portunu forward'lamaniz gerekiyor
```bash
kubectl port-forward svc/redis-service 6379:6379 -n redis
```
sonrasinda `redis-commander` i calistirip redisi takip edebilirsiniz.

---
Proje ci\cd veya bir ara yuze sahip degildir.
Worker'in [linki]('https://github.com/mesabuca/my-phishy-worker')

# Postman istekleri
Projeyi basit komutlarla test edebilmek icin gereken endpointler ve istekler assagida listelenmektedir. Proje restAPI'a uyumlu gelistirilmistir. Diger crud endpointlerde mevcuttur.

### Create target
```
curl --location 'localhost:8080/targets' \
--header 'Content-Type: application/json' \
--data '{
    "fullName": "mesa2",
    "email": "memesa2"
}'
```

### Get all target
```
curl --location 'localhost:8080/targets' \
--data ''
```
### Create campaign
```
curl --location 'localhost:8080/campaigns' \
--header 'Content-Type: application/json' \
--data '{
    "name": "camp1",
    "description": "camp1desc"
}'
```
### Get all campaign
```
curl --location 'localhost:8080/campaigns' \
--data ''
```
### Add target to campaign
```
curl --location 'localhost:8080/campaigns/1/add_target' \
--header 'Content-Type: application/json' \
--data '{
    "targetId": 1
}'
```
### Launch campaign
```
curl --location --request POST 'localhost:8080/campaigns/1/launch' \
--header 'Content-Type: application/json' \
--data ''
```
### Schedule Campaign
```
curl --location 'localhost:8080/campaigns/1/schedule' \
--header 'Content-Type: application/json' \
--data '{"scheduledTime": "2024-01-27T20:27:00.000Z"}'
```
Not: Buradaki tarihi bilgisayar saatinizin 3 saat oncesine gore ayarlarsaniz kisa surede test edebilirsiniz.