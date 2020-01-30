import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.10:3333'
})

export default api;

/*
Orientação sobre a chamada da API;


se for usando o emulador colocar http://ip:portadaappinode
Ex:
baseURL: 'http://192.168.0.4:3333'

Se for usando emulador: 
baseURL: 'http://localhost:3333'

ou 

baseURL: 'http://10.0.2.2:3333'

ou 
baseURL: 'http://10.0.2.10:3333'
ip pego no expo + portadaapinode



*/