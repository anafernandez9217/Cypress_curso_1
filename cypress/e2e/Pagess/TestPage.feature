Feature: Demo de Cocumber Uno

    Esto es un demo de como utilizar Cocumber
    @focus
    Scenario: Demo de Cocumber Uno: Cucumber
        Given Abrir el navegador principal
        When Cargando el nombre
        When Cargando el telefono
        When Cargando el email
        And Cargando la direccion
        And Click en el Button
        Then Validar el nombre de la Página


    Scenario: Demo de Cocumber Dos
        Given Abrir el navegador principal
        When Cargando el nombre Hana
        When Cargando el apellido Nero
        When Cargando el telefono 3311777082
        When Cargando el email hana_9217@gmail.com
        And Cargando la direccion Dirección demo
        And Click en el Button
        Then Validar el nombre de la Página

