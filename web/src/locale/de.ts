import { localeInterface } from "./localeInterface"

const locale_de: localeInterface = {
  locale: "de",
  frontpage: {
    welcome: "Willkommen bei Broadcast Box",
    welcome_subtitle: "Broadcast Box ist ein Tool, mit dem du hochwertige Videos in Echtzeit effizient streamen kannst – dank modernster Videocodecs und WebRTC-Technologie.",

    toggle_watch: "Ich möchte zuschauen",
    toggle_stream: "Ich möchte streamen",

    stream_input_label: "Stream-Schlüssel",
    stream_input_placeholder_share: "Gib den Namen des Streams ein, den du teilen möchtest",
    stream_input_placeholder_join: "Gib den Namen des Streams ein, dem du beitreten möchtest",

    stream_button_stream_start: "Stream starten",
    stream_button_stream_join: "Stream beitreten",
  },

  available_streams: {
    title: "Aktuelle Streams",
    stream_join_message: "Klicke auf einen Stream, um ihm beizutreten",
    no_streams_message: "Derzeit sind keine Streams verfügbar",
  },

  statistics: {
    title: "Statistiken",
    no_statistics_available: "Derzeit sind keine Statistiken verfügbar",
    no_sessions: "Keine Sitzungen verfügbar",

    whep_sessions: "WHEP-Sitzungen",

    video: "Video",
    video_tracks: "Videospuren",
    video_track_not_available: "Keine Videospuren",
    video_bitrate: "Bitrate",
    video_bitrate_total_out: "Ausgehende Bitrate",

    audio: "Audio",
    audio_tracks: "Audiospuren",
    audio_track_not_available: "Keine Audiospuren",

    button_watch_stream: "Stream ansehen",

    rid: "RID",
    layer: "Ebenen",
    packets_received: "Empfangene Pakete",
    packets_dropped: "Verworfene Pakete",
    packets_written: "Gesendete Pakete",
    last_key_frame: "Letztes Keyframe",
    timestamp: "Zeitstempel",
    sequence_number: "Seq.-Nummer"
  },

  player_header: {
    error: "Fehler",
    success: "Erfolg",
    warning: "Warnung",

    mediaAccessError_default: "Zugriff auf deine Mediengeräte nicht möglich",
    mediaAccessError_noMediaDevices: "MediaDevices API wurde nicht gefunden. Zum Streamen in Broadcast Box ist HTTPS erforderlich",
    mediaAccessError_notAllowedError: "Du kannst nicht mit deiner Kamera streamen, der Zugriff wurde deaktiviert.",
    mediaAccessError_notFoundError: "Es scheint, dass du keine Kamera hast oder der Zugriff blockiert ist\nPrüfe die Kameraeinstellungen sowie die Browser- und Systemberechtigungen.",

    connection_established: "Live: Du streamst gerade an",
    connection_disconnected: "WebRTC wurde getrennt oder konnte keine Verbindung herstellen",
    connection_failed: "Broadcast-Box-Sitzung konnte nicht gestartet werden",
    connection_has_packetloss: "WebRTC hat Paketverluste",

    publish_screen: "Bildschirm/Fenster/Tab übertragen",
    publish_webcam: "Webcam übertragen",

    button_end_stream: "Stream beenden"
  },

  player_page: {
    cinema_mode_disable: "Kinomodus deaktivieren",
    cinema_mode_enable: "Kinomodus aktivieren",

    modal_add_stream_title: "Stream hinzufügen",
    modal_add_stream_message: "Gib den Stream-Namen ein, um ihn zum Multi-Stream hinzuzufügen",
    modal_add_stream_placeholder: "Gib den Namen des Streams ein, den du hinzufügen möchtest",
  },

  player: {
    message_is_not_online: "streamt derzeit nicht",
    message_loading_video: "Video wird geladen",
    message_error: "Fehler",

    stream_status_offline: "Offline"
  },

  stream_status: {
    message_current_viewers: "Aktuelle Zuschauer"
  },

  profile_settings: {
    title: "Profileinstellungen",
    subTitle: "Streaming-Profil konfigurieren",

    toggle_stream_privacy_label: "Privatsphäre",
    toggle_stream_privacy_title_left: "Privat",
    toggle_stream_privacy_title_right: "Öffentlich",

    input_motd_label: "Nachricht des Tages",
    button_save_label: "Speichern"
  },

  admin_login: {
    login_input_dialog_title: "Anmelden",
    login_input_dialog_message: "Gib das Admin-Token ein, um dich anzumelden",
    login_input_dialog_placeholder: "Admin-Token eingeben",
    error_message_login_failed: "Anmeldung fehlgeschlagen",
    button_login_text: "Anmelden"
  },

  admin_page: {
    title: "Admin-Portal",
    menu_api: "API",
    menu_logging: "Protokollierung",
    menu_logout: "Abmelden",
    menu_profiles: "Profile",
    menu_settings: "Einstellungen",
    menu_status: "Status"
  },

  admin_page_api: {
    title: "API-Einstellungen",
    table_header_setting_name: "Einstellung",
    table_header_value: "Wert"
  },

  admin_page_logging: {
    title: "Protokollierung",
    table_header_setting_name: "Einstellung",
    table_header_value: "Wert"
  },

  admin_page_profiles: {
    title: "Profilübersicht",

    add_profile_modal_title: "Profil hinzufügen",
    add_profile_modal_message: "Gib einen Namen ein, um einen neuen Stream hinzuzufügen",
    add_profile_modal_placeholder: "Neuen Stream-Namen hier eingeben",

    remove_profile_modal_title: "Profil entfernen",
    remove_profile_modal_message: "Möchtest du wirklich entfernen",

    table_header_stream_key: "Stream-Name",
    table_header_is_public: "Ist öffentlich",
    table_header_motd: "MOTD",
    table_header_token: "Token",

    button_add_profile: "Profil hinzufügen",

    yes: "Ja",
    no: "Nein"
  },

  admin_page_status_page: {
    title: "Stream-Statusübersicht",

    table_header_stream_key: "Stream-Name",
    table_header_is_public: "Ist öffentlich",
    table_header_video_tracks: "Videospuren",
    table_header_audio_tracks: "Audiospuren",
    table_header_sessions: "Sitzungen",
    table_header_total_packets: "Pakete gesamt",

    yes: "ja",
    no: "nein"
  },

  shared_component_card: {
    button_accept: "Akzeptieren"
  },
  shared_component_text_input_modal: {
    button_accept: "Akzeptieren"
  },
  shared_component_text_input_dialog: {
    button_accept: "Akzeptieren"
  },

  chat: {
    title: "Chat",
    placeholder_input: "Nachricht schreiben",
    button_reaction_title: "Reaktion senden",
    button_change_display_name_title: "Anzeigenamen ändern",
    button_send_title: "Nachricht senden",
    status_connecting: "verbindet",
    status_connected: "verbunden",
    status_error: "Fehler",
    status_disconnected: "getrennt",
    no_messages_yet: "Noch keine Chat-Nachrichten.",
    error_failed_to_connect: "Chat-Verbindung fehlgeschlagen",
    error_not_connected: "Chat ist nicht verbunden",
    error_failed_to_send: "Nachricht konnte nicht gesendet werden",
    modal_display_name_title: "Anzeigename",
    modal_display_name_message: "Lege deinen Anzeigenamen für den Chat fest",
    modal_display_name_placeholder: "Anzeigename eingeben",
  },
}
export default locale_de
