//
//  SocialcademyApp.swift
//  Socialcademy
//
//  Created by Pedro Silva on 12/05/2023.
//

import SwiftUI
import Firebase
 
@main
struct SocialcademyApp: App {
    init() {
        FirebaseApp.configure()
    }
 
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
