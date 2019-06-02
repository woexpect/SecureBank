# Configuración de ambiente

A continuación se describen los pasos necesarios para configurar el ambiente que permitirá ejecutar en modo desarrollo el contenido de este repositorio.

# Pre-Requisitos

A continuación se muestran los pre-requisitos necesarios antes de comenzar:
 1. Si se desea desarrollar aplicaciones para el Sistema Operativo **IOS** debe tener en cuenta que solo será posible teniendo una pc mac. Para desarrollar aplicaciones para el Sistema Operativo **Android** no hay restricciones y puede desarrollarlas desde Sistemas Operativos Windows, Mac y Linux.
 2. Tener espacio suficiente en disco. Los proyectos de React Native suelen tener grandes tamaños debido a que tienen embebido proyectos de Android y Xcode, se recomienda tener un espacio de por lo menos **1GB** para instalar el ambiente de desarrollo.
 3. Ya que este es un proyecto realizado con el framework **React Native**, es indispensable instalar su ambiente de desarrollo antes de comenzar a configurar el proyecto de manera local. Puede hacer click en el link presentado a continuación que lo llevará a la página oficial donde está el paso a paso de la configuración para el **[ambiente de desarrollo de React Native](https://facebook.github.io/react-native/docs/getting-started)**.
 4. Instale un **IDE** (Entorno de desarrollo) de su preferencia para poder navegar, editar y desarrollar. Recomiendo **Visual Studio Code**.

# Usando el repositorio

Una vez terminados los pasos preliminares es momento de descargar este repositorio y hacerlo funcionar, por favor siga los siguientes pasos atentamente.

## Clonando el repositorio

Por favor, use el link de este repositorio para descargarlo en su equipo. Este repositorio pesa unas **100MB** ya que trae consigo tanto el proyecto Android (Android Studio) como el de IOS (Xcode).

Tenga en cuenta la ruta del directorio donde descargó este repositorio, puesto que vamos a estar haciendo ajustes en él.

## Descargar los módulos de React Native (node_modules)

Ahora vamos a descargar los **node_modules**. Los node_modules son las librerías que hacen posible que React Native funcione tanto en Android como en IOs. Haga click en el link de abajo y descárguelos en su computadora:

[Link a node_modules](https://drive.google.com/file/d/1yb4vVpr_RyPCFUpWDs0xHlHAIuoLBJzF/view?usp=sharing)

Una vez descargados extraiga su contenido de ser necesario y **copie o corte** la carpeta **node_modules** y déjela en la raíz del proyecto que recién acaba de clonar en su computadora, el directorio se debe ver algo parecido a esto:

![enter image description here](https://lh3.googleusercontent.com/nyVsHtC8jWs6S1f8fyF94aMzCcVi6OLCFr6zFmvmwWgQ00StioV7zJY-2wbxEN1GCaIAKk6KCns6mO7SpGt3ljZGeemNpYqbXrtk5DugveJI5Bmg6vkck3TIOvmOdtcDGmxd-rUnl1JDo-UDTFCWvyzF-kv9v78fokVUp4w8_Xk3G1yCNJzmC537IwtTCxgLHjIzPEUtidY36MvCaJVow7ME_SH1o2Sn2rRW5Cm7zKDv0sHBh6THfxz2it39sfDzA6MWfXW_2jMKvgfZTC-4b6i_hOCgsNhuAUeMgueOjS7A_YUfQG8gc1rbeVD8A4NGNHl_vox4vXfcR08i_5Jv17bt9ugyOmyO9ZA1MRxh5N9QrHoido6AAUVdUiceYYXjrPHywLr88Jt1p6cfwmuC6ofmyyPAk-XYouHjBFIJFA25_zCu3SpjCLBiR-C3Oq8nUr6x1B_IpdPSP4V5PZtnlFcq1YMaspPmfKkT5KaGX5Ic_JTMDBjmOQ1hKlO88616_8Qu9VbUDqU38mAWTQBWdEAin9kxxQVFhcI-iSrdpvwvOpQ2OFrcsOHFVQHKCPHXqy1b2p_t_klZO8-Ptf6sBYc514XrKF1-HAR8Frk=w1920-h1017)

## Preparándonos para ejecutar la app (Android)

Una vez descargados y posicionados los node_modules es momento de intentar ejecutar la aplicación, para esto conecte un celular con SO Android en **modo de depuración USB** (opciones de desarrollador) o abra un emulador usando Android Studio, ahora abra una **terminal** y navegue hasta el directorio donde descargó el repositorio y ejecute el siguiente comando:

**react-native run-android**

Si todo está bien la app se ejecutará en el emulador o en el dispositivo movil físico en modo debug y con el bundle en una terminal en su pc. 

Si sale algún tipo de error generalmente es por librerías que hacen falta, así que vamos a hacer lo siguiente:

 1. Abrir Android Studio
 2. Dentro de Android Studio abrir la carpeta **android** que se encuentra en la raíz del repositorio
 3. Cuando el IDE abra el proyecto, haga click en el botón del martillo verde en la barra superior para hacer un build del proyecto, en este momento saldrán varias sugerencias de instalación de librerías y herramientas, por favor instálelas todas.
 4. Cuando el IDE no solicite la instalación de más elementos, intente ejecutar el comando **react-native run-android** de nuevo.
