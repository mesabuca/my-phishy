Docker kur 
minikube kur
kubectl kur
uygulamaya docker file yazdik
imaji build ettik docker huba pushladik
minikube clusterina postgres kurduk
minikube clusterina redis kurduk
minikube clusterina phishy deploy ettik

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