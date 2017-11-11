## Instalación nativescript


    macOS Mavericks or later
    The latest stable official release of Node.js (LTS) 6.x
    (Optional) Homebrew to simplify the installation of dependencies
    For iOS development
        Latest Xcode
        Command-line tools for Xcode
        xcodeproj ruby gem
        CocoaPods
        (Optional) xcproj command line tool
    For Android development
        JDK 8
        Android SDK 22 or a later stable official release
        Android Support Repository
        (Optional) Google Repository
        Android SDK Build-tools 25.0.2 or a later stable official release

You must also have the following two environment variables setup for Android development:

    JAVA_HOME
    ANDROID_HOME


# Install nativescript cli https://docs.nativescript.org/start/ns-setup-os-x
npm install -g nativescript
# Seguir la guia oficial, si falla la instalación de las gemas usar -n /usr/local/bin
sudo gem install -n /usr/local/bin xcodeproj
sudo gem install -n /usr/local/bin cocoapods
brew install xcproj
## Crear proyecto 
tns create rpspt --ng

## Probar en los dispositivos moviles:
tns run ios
tns run android

## Visual Studio Code Extensions
nativescript
NativeScript + Angular Snippets
Angular 5 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout

## Añadir lodash dependencia
yarn install lodash@4.17.4
tns run ios
npm install @types/lodash@4.14.44 --save

## Cambiar aspecto de la barra de estado
primero en el fichero de configuración de ios en app/App_Resources/IOS/info.plist añadir
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
después borrr el directorio platform y reconstruirlo:
rm -rf platforms/
tns run ios