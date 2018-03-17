/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        document.getElementById('btnGuardaDatos').addEventListener(
            'click',
            this.guardaDatos,
            false
        );
        document.getElementById('btnMuestraDatos').addEventListener(
            'click',
            this.muestraDatos,
            false
        );
        document.getElementById('btnRemueveDato').addEventListener(
            'click',
            this.remueveDatos,
            false
        );
        document.getElementById('btnObtenerElemento').addEventListener(
            'click',
            this.obtenerDatos,
            false
        );

        var localStorage = window.localStorage;
        var pantalla = document.getElementById("pantalla");
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    },
    guardaDatos: function (){
        localStorage.setItem('nombre', 'Jacobo');
        localStorage.setItem('trabajo', 'Aqui');
        localStorage.setItem('puesto', 'xxxx');
        pantalla.innerHTML = 'Datos agregdos';
    },
    muestraDatos: function(){
        var datos = localStorage.getItem('nombre') + " " + localStorage.getItem('trabajo' + " " + localStorage.getItem('puesto'));
        pantalla.innerHTML = datos;
    },
    remueveDatos: function(){
        localStorage.removeItem('trabajo');
    },
    obtenerDatos: function(){
        alert("obtiene");
    }
};

app.initialize();