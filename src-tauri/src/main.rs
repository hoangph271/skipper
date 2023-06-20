#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use enigo::*;

#[tauri::command]
fn play_media() {
    Enigo::new().key_down(Key::CapsLock)
}
#[tauri::command]
fn pause_media() {
    Enigo::new().key_down(Key::CapsLock)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![pause_media, play_media])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
