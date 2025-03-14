Feature: Demo de Cocumber Uno

    Esto es un demo de como utilizar Cocumber
@focus 
    Scenario: Demo de Cocumber Uno
    Given Abrir el navegador principal
    When Cargando el nombre
    When Cargando el email
    And Cargando la Dirección
    Then Validar el nombre de la Página


    Característica: Iniciar sesión en el sitio con datos válidos
  Antecedentes: Navegar al sitio web
      Dado que navego al sitio web
  Escenario: Iniciar sesión en la aplicación con datos válidos
      Cuando hago clic en el enlace de inicio de sesión
      E ingresé una credencial válida
          | correo electrónico | contraseña válida |
          | xxxxxx@gmail.com | xxxxx@1234 |
      Y hago clic en el botón de inicio de sesión
      Luego, valido que el usuario haya iniciado sesión Luego
      , valido el título después de iniciar sesión
      Cuando hago clic en el enlace Sin código
      Luego, valido que el enlace Sin código debe estar abierto
      Cuando hago clic en el enlace de cierre de sesión*