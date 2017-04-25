import LocalizedStrings from 'react-native-localization';

// Main resource objects
var strings = new LocalizedStrings({
    en: {
        currentGameVersion: 'Current game version: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Servers',
        routeMeetupsTitle: 'Meetups',
        routeSettingsTitle: 'Settings',
        routeAboutTitle: 'About this app',
        routeRulesTitle: 'TruckersMP Rules',
        supportedETSVersion: 'Supported ETS version: ',
        supportedATSVersion: 'Supported ATS version: ',
        lastReleaseDate: 'Last Release date: ',
        playersOnline: 'players online',
        currentGameTime: 'Current game time: ',
        servers: 'Servers',
        about: 'About',
        meetups: 'Meetups',
        searchPlayer: 'Search Player',
        rules: 'Rules',
        settings: 'Settings',
        playersInQueue: 'players in queue',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Speed limiter enabled',
        speedLimiterDisabled: 'Speed limiter disabled',
        status: 'Status',
        info: 'Info',
        addToCalendar: 'Add to calendar',
        language: 'Language: ',
        enableAutoRefresh: 'Enable auto refresh',
        autoRefreshGameTime: 'Auto refresh game time',
        autoRefreshServersList: 'Auto refersh servers list',
        refreshServersListEvery: 'Refresh servers list every',
        seconds10: '10 seconds',
        seconds30: '30 seconds',
        minute: '1 minute',
        minutes2: '2 minutes',
        minutes5: '5 minutes',
        minutes10: '10 minutes',
        minutes20: '20 minutes',
        customizations: 'Customizations',
        settingsHeaderLanguage: 'Language',
        settingsHeaderTheme: 'Theme',
        english: 'English',
        italian: 'Italiano',
        eventAddedToCalendar: 'Event added to calendar',
        eventTitle: 'TruckersMP Event - Meetup',
        eventNotes: 'Organized by {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP Website',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steam Group',
        readMore: 'Read More',
        newsAndEvents: 'News and events',
        gameStatus: 'Game Status',
        newTruckersMPGameVersionReleaseNotificationText: 'New TruckersMP version released',
        french: 'French',
        bulgarian: 'Bulgarian',
        finnish: 'Finnish',
        spanish: 'Spanish',
        dutch: 'Dutch',

        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'By Steam Username',
        searchBySteamID: 'By Steam ID',
        searchByTruckersMPID: 'By TruckersMP ID',
        searchButton: 'Search',
        searchFieldPlaceholder: 'Specifiy search term',
        steamProfile: 'Steam profile',
        truckersMPProfile: 'TruckersMP profile',
        viewSteamProfile: 'View Steam profile',
        viewTruckersMPProfile: 'View TruckersMP profile',
        bans: 'Bans History',
        noBans: 'No bans',
        nickName: 'Nickname:',
        onTruckersMPfrom: 'On TruckersMP from', // On TruckersMP from DATE
        onSteamFrom: 'On Steam from', // On Steam from DATE
        role: 'Role:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Real Name:',
        steamUsername: 'Steam Username:',
        steamID: 'Steam ID:',
        issuedBy: 'Issued by {0} on {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Expires:' // Expires: DATE
    },
    it: {
        currentGameVersion: 'Versione corrente: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Stato servers TruckersMP',
        routeMeetupsTitle: 'Eventi e Convogli',
        routeSettingsTitle: 'Impostazioni',
        routeAboutTitle: 'Informazioni',
        routeRulesTitle: 'Regole TruckersMP',
        supportedETSVersion: 'Versione ETS supportata: ',
        supportedATSVersion: 'Versione ATS supportata: ',
        lastReleaseDate: 'Ultima data di rilascio: ',
        playersOnline: 'giocatori online',
        currentGameTime: 'Attuale orario in gioco: ',
        servers: 'Servers',
        about: 'Informazioni',
        meetups: 'Eventi e convogli',
        searchPlayer: 'Cerca giocatore',
        rules: 'Regole',
        settings: 'Impostazioni',
        playersInQueue: 'giocatori in coda',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Limitatore di velocità abilitato',
        speedLimiterDisabled: 'Limitatore di velocità non abilitato',
        status: 'Stato',
        info: 'Info',
        addToCalendar: 'Aggiungi al calendario',
        language: 'Lingua: ',
        enableAutoRefresh: 'Abilitato aggiornamento automatico',
        autoRefreshGameTime: 'Aggiorna orario in gioco',
        autoRefreshServersList: 'Aggiorna lista stato servers',
        refreshServersListEvery: 'Aggiorna la lista servers ogni',
        seconds10: '10 secondi',
        seconds30: '30 secondo',
        minute: '1 minuto',
        minutes2: '2 minuti',
        minutes5: '5 minuti',
        minutes10: '10 minuti',
        minutes20: '20 minuti',
        customizations: 'Personalizzazione',
        english: 'Inglese',
        italian: 'Italiano',
        settingsHeaderLanguage: 'Lingua',
        settingsHeaderTheme: 'Tema',
        eventAddedToCalendar: 'Evento aggiunto al calendario',
        truckersMPWebSite: 'Sito TruckersMP ',
        truckersMPForum: 'Forum TruckersMP',
        truckersMPSteamGroup: 'TruckersMP su Steam',
        readMore: 'Leggi tutto',
        newsAndEvents: 'News e eventi',
        gameStatus: 'Stato del gioco',
        newTruckersMPGameVersionReleaseNotificationText: 'Nuova versione di TruckersMP rilasciata',
        french: 'Francese',
        bulgarian: 'Bulgaro',
        finnish: 'Finlandese',
        spanish: 'Spagnolo',
        dutch: 'Olandese',

        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'Per username Steam',
        searchBySteamID: 'Per ID Steam',
        searchByTruckersMPID: 'Per ID TruckersMP',
        searchButton: 'Cerca',
        searchFieldPlaceholder: 'Inserisci un termine di ricerca',
        steamProfile: 'Profilo Steam',
        truckersMPProfile: 'Profilo TruckersMP',
        viewSteamProfile: 'Guarda il profilo su Steam',
        viewTruckersMPProfile: 'Guarda il profilo su TruckersMP',
        bans: 'Storico restrizioni',
        noBans: 'Nessuna restrizione',
        nickName: 'Nickname:',
        onTruckersMPfrom: 'Su TruckersMP dal', // On TruckersMP from DATE
        onSteamFrom: 'Su Steam dal', // On Steam from DATE
        role: 'Ruolo:',
        truckersMPID: 'ID TruckersMP:',
        realName: 'Nome reale:',
        steamUsername: 'Username Steam:',
        steamID: 'ID Steam:',
        issuedBy: 'Emato da {0} il {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Scadenza:' // Expires: DATE
    },
    // credits: Hristo Spasov
    bg: {
        currentGameVersion: 'Текуща версия на играта: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Сървъри',
        routeMeetupsTitle: 'Заглавие на срещата',
        routeSettingsTitle: 'Настройки',
        routeAboutTitle: 'За маршрута',
        routeRulesTitle: 'Правила в играта',
        supportedETSVersion: 'Подържана ETS версия: ',
        supportedATSVersion: 'Подържана ATS версия: ',
        lastReleaseDate: 'Последен ъпдейт: ',
        playersOnline: 'Играчи на линия',
        currentGameTime: 'Реално време в играта: ',
        servers: 'Сървъри',
        about: 'Относно',
        meetups: 'Срещи',
        searchPlayer: 'Търсене на играч',
        rules: 'Правила',
        settings: 'Настройки',
        playersInQueue: 'Чакащи играчи в лоби',
        online: 'На линия',
        offline: 'Извън линия',
        speedLimiterEnabled: 'Ограничител на скоростта - активиран',
        speedLimiterDisabled: 'Ограничител на скоростта - деактивиран',
        status: 'Статус',
        info: 'Информация',
        addToCalendar: 'Добави в календара',
        lan2guage: 'Език: ',
        enableAutoRefresh: 'Активира автоматично обновление',
        autoRefreshGameTime: 'Автоматично обновление на времето в играта',
        autoRefreshServersList: 'Автоматично обновление на сървър листа',
        refreshServersListEvery: 'Обновление на сървъра листа всеки',
        seconds10: '10 секунди',
        seconds30: '30 секунди',
        minute: '1 минута',
        minutes2: '2 минути',
        minutes5: '5 минути',
        minutes10: '10 минути',
        minutes20: '20 минути',
        customizations: 'Персонализиране',
        settingsHeaderLanguage: 'Заглавие',
        settingsHeaderTheme: 'Тема',
        english: 'Английски',
        italian: 'Италиански',
        bulgarian: 'Български',
        eventAddedToCalendar: 'Добавено събитие към календара',
        eventTitle: 'TruckersMP Събитие - Среща',
        eventNotes: 'Организирато от {0} - Сървър: {1}',
        truckersMPWebSite: 'TruckersMP Уебсайт',
        truckersMPForum: 'TruckersMP Форум',
        truckersMPSteamGroup: 'TruckersMP Steam група',
        readMore: 'Прочети повече',
        newsAndEvents: 'Новини и събития',
        gameStatus: 'Статус на играта',
        newTruckersMPGameVersionReleaseNotificationText: 'Нова TruckersMP версия',
        french: 'French',
        finnish: 'Finnish',
        spanish: 'Spanish',
        dutch: 'Dutch'
    },
    // credits: Kevin Monteil
    fr: {
        currentGameVersion: 'Version actuelle du jeu: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Serveurs TruckersMP',
        routeMeetupsTitle: 'Rencontres ',
        routeSettingsTitle: 'Paramètres',
        routeAboutTitle: 'À propos de l’application',
        routeRulesTitle: 'Règlement de TruckersMP',
        supportedETSVersion: 'Version d’ETS supportée: ',
        supportedATSVersion: 'Version d’ATS supportée: ',
        lastReleaseDate: 'Dernière mise à jour: ',
        playersOnline: 'Joueurs en ligne',
        currentGameTime: 'Heure actuelle du jeu: ',
        servers: 'Serveurs',
        about: 'À propos',
        meetups: 'Rencontres',
        searchPlayer: 'Rechercher un joueur',
        rules: 'Règlement',
        settings: 'Paramètres',
        playersInQueue: 'Joueurs en attente',
        online: 'En ligne',
        offline: 'Hors ligne',
        speedLimiterEnabled: 'Limiteur de vitesse activé',
        speedLimiterDisabled: 'Limiteur de vitesse désactivé',
        status: 'États',
        info: 'Info',
        addToCalendar: 'Ajouter au calendrier',
        language: 'Langue: ',
        enableAutoRefresh: 'Activer le rafraîchissement auto',
        autoRefreshGameTime: 'Rafraîchir automatiquement l’heure du jeu',
        autoRefreshServersList: 'Rafraîchir automatiquement la liste des serveurs',
        refreshServersListEvery: 'Fréquence de rafraîchissement',
        seconds10: '10 secondes',
        seconds30: '30 secondes',
        minute: '1 minute',
        minutes2: '2 minutes',
        minutes5: '5 minutes',
        minutes10: '10 minutes',
        minutes20: '20 minutes',
        customizations: 'Personnalisation',
        settingsHeaderLanguage: 'Langue',
        settingsHeaderTheme: 'Thème',
        english: 'Anglais',
        italian: 'Italien',
        eventAddedToCalendar: 'Événement ajouté au calendrier',
        eventTitle: 'Événement TruckersMP - Rencontre',
        eventNotes: 'Organisé par {0} - Serveur: {1}',
        truckersMPWebSite: 'Site internet de TruckersMP',
        truckersMPForum: 'Forum de TruckersMP',
        truckersMPSteamGroup: 'Groupe Steam de TruckersMP',
        readMore: 'Lire plus',
        newsAndEvents: 'Nouveautés et Événements',
        gameStatus: 'État du jeu',
        newTruckersMPGameVersionReleaseNotificationText: 'Nouvelle version de TruckersMP disponible',
        french: 'Francais',
        bulgarian: 'Bulgare',
        finnish: 'Finlandais',
        spanish: 'Espanol',
        dutch: 'Néerlandais'
    },
    // Jiri Innanen
    fi: {
        currentGameVersion: 'Nykyinen peliversio ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP palvelimet',
        routeMeetupsTitle: 'Kokoontumiset',
        routeSettingsTitle: 'Asetukset',
        routeAboutTitle: 'Tietoja tästä sovelluksesta',
        routeRulesTitle: 'TruckersMP Säännöt',
        supportedETSVersion: 'Tuetut ETS versiot: ',
        supportedATSVersion: 'Tuetut ATS versiot: ',
        lastReleaseDate: 'Viimeinen julkaisupäivä: ',
        playersOnline: 'Pelaajia Paikalla',
        currentGameTime: 'Nykyinen peliaika: ',
        servers: 'Palvelimet',
        about: 'Tietoja',
        meetups: 'Kokoontumiset',
        searchPlayer: 'Etsi pelaajia',
        rules: 'Säännöt',
        settings: 'Asetukset',
        playersInQueue: 'Pelaajaa Jonossa',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Nopeusrajoitin käytössä',
        speedLimiterDisabled: 'Ei nopeusrajoitinta',
        status: 'Tila',
        info: 'Info',
        addToCalendar: 'Lisää kalenteriin',
        language: 'Kieli: ',
        enableAutoRefresh: 'Salli automaattinen päivitys',
        autoRefreshGameTime: 'Automaattinen peliajan päivitys',
        autoRefreshServersList: 'Automaattinen palvelimien päivitys',
        refreshServersListEvery: 'Päivitä palvelinlista',
        seconds10: '10 sekuntia',
        seconds30: '30 sekuntia',
        minute: '1 minuutti',
        minutes2: '2 minuuttia',
        minutes5: '5 minuuttia',
        minutes10: '10 minuuttia',
        minutes20: '20 minuuttia',
        customizations: 'Kustomointi',
        settingsHeaderLanguage: 'Kielet',
        settingsHeaderTheme: 'Teema',
        english: 'Englanti',
        italian: 'Italia',
        eventAddedToCalendar: 'Tapahtuma lisätty kalenteriin',
        eventTitle: 'TruckersMP tapahtumat',
        eventNotes: 'Organized by {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP verkkosivu',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steam ryhmä',
        readMore: 'Lue lisää',
        newsAndEvents: 'Uutiset & tapahtumat',
        gameStatus: 'Pelin tila',
        newTruckersMPGameVersionReleaseNotificationText: 'Uusi TruckersMP versio julkaistu',
        french: 'Raska',
        bulgarian: 'Bulgaria',
        finnish: 'Suomi',
        spanish: 'Espanja',
        dutch: 'Dutch'
    },
    // credits Francisco Ramirez
    es: {
        currentGameVersion: 'Versión Actual del Juego: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Servidores TruckersMP',
        routeMeetupsTitle: 'Reuniones',
        routeSettingsTitle: 'Ajustes',
        routeAboutTitle: 'Acerca de esta app',
        routeRulesTitle: 'Reglas de TruckersMP',
        supportedETSVersion: 'Versión ETS soportada: ',
        supportedATSVersion: 'Versión ATS soportada: ',
        lastReleaseDate: 'Fecha de Última Versión: ',
        playersOnline: 'Jugadores Conectados',
        currentGameTime: 'Hora actual del juego: ',
        servers: 'Servidores',
        about: 'Acerca',
        meetups: 'Reuniones',
        searchPlayer: 'Buscar Jugador',
        rules: 'Reglas',
        settings: 'Ajustes',
        playersInQueue: 'jugadores en cola',
        online: 'En linea',
        offline: 'Desconectado',
        speedLimiterEnabled: 'Limitador de velocidad activado',
        speedLimiterDisabled: 'Limitador de velocidad desactivado',
        status: 'Estado',
        info: 'Info',
        addToCalendar: 'Agregar al calendario',
        language: 'Idioma: ',
        enableAutoRefresh: 'Activar auto refrescar',
        autoRefreshGameTime: 'Auto refrescar hora del juego',
        autoRefreshServersList: 'Auto refrescar lista de servidores',
        refreshServersListEvery: 'Refrescar lista de servidores cada',
        seconds10: '10 segundos',
        seconds30: '30 segundos',
        minute: '1 minuto',
        minutes2: '2 minutos',
        minutes5: '5 minutos',
        minutes10: '10 minutos',
        minutes20: '20 minutos',
        customizations: 'Modificaciones',
        settingsHeaderLanguage: 'Idioma',
        settingsHeaderTheme: 'Tema',
        english: 'Inglés',
        italian: 'Italiano',
        eventAddedToCalendar: 'Evento agregado al calendario',
        eventTitle: 'Evento TruckersMP - Reunión',
        eventNotes: 'Organizado por {0} - Servidor: {1}',
        truckersMPWebSite: 'Sitio web TruckersMP',
        truckersMPForum: 'Foros TruckersMP',
        truckersMPSteamGroup: 'Grupo de steam TruckersMP',
        readMore: 'Leer más',
        newsAndEvents: 'Noticias y eventos',
        gameStatus: 'Estado del Juego',
        newTruckersMPGameVersionReleaseNotificationText: 'Nueva versión de TruckersMP disponible',
        french: 'Francés',
        bulgarian: 'Búlgaro',
        finnish: 'Finlandés',
        spanish: 'Español',
        dutch: 'Holandés'
    },
    // credits Derk Nomden
    nl: {
        currentGameVersion: 'Huidige game versie: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Servers',
        routeMeetupsTitle: 'Meetings',
        routeSettingsTitle: 'Instellingen',
        routeAboutTitle: 'Over deze app',
        routeRulesTitle: 'TruckersMP regels',
        supportedETSVersion: 'Ondersteunende ETS versie: ',
        supportedATSVersion: 'Ondersteunende ATS versie: ',
        lastReleaseDate: 'Laatste release datum: ',
        playersOnline: 'Spelers online',
        currentGameTime: 'Huidige spel tijd: ',
        servers: 'Servers',
        about: 'Over',
        meetups: 'Meetings',
        searchPlayer: 'Zoek speler',
        rules: 'Regels',
        settings: 'Instellingen',
        playersInQueue: 'Spelers in wachtrij',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Snelheids limiet aan',
        speedLimiterDisabled: 'Snelheids limiet uit',
        status: 'Status',
        info: 'Info',
        addToCalendar: 'Voeg toe aan kalender',
        language: 'Taal: ',
        enableAutoRefresh: 'Activeer auto vernieuwen',
        autoRefreshGameTime: 'Automatische spel tijd vernieuwen',
        autoRefreshServersList: 'Automatische serverlijst vernieuwen',
        refreshServersListEvery: 'Vernieuw serverlijst elke',
        seconds10: '10 seconden',
        seconds30: '30 seconden',
        minute: '1 minuten',
        minutes2: '2 minuten',
        minutes5: '5 minuten',
        minutes10: '10 minuten',
        minutes20: '20 minuten',
        customizations: 'Aanpassingen',
        settingsHeaderLanguage: 'Taal',
        settingsHeaderTheme: 'Thema',
        english: 'Engels',
        italian: 'Italiaans',
        eventAddedToCalendar: 'Event toegevoegd aan kalender',
        eventTitle: 'TruckersMP Event - Meetings',
        eventNotes: 'Georganiseerd bij {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP Website',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steam Groep',
        readMore: 'Lees meer',
        newsAndEvents: 'Nieuws en events',
        gameStatus: 'Game Status',
        newTruckersMPGameVersionReleaseNotificationText: 'Nieuwe TruckersMP versie gelanceerd',
        french: 'Frans',
        bulgarian: 'Bulgaars',
        finnish: 'Fins',
        dutch: 'Dutch'
    }
});

//strings.setLanguage(settings.language);

module.exports = strings;