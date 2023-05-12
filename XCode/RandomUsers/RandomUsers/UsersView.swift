//
//  UsersView.swift
//  RandomUsers
//
//  Created by Pedro Silva on 12/05/2023.
//

import SwiftUI
 
struct UsersView: View {
  @StateObject var userData = UserData()
 
  var body: some View {
    NavigationView {
      List(userData.users) { user in
        Text(user.fullName)
      }
      .navigationTitle("Random Users")
    }
  }
}

struct UsersView_Previews: PreviewProvider {
    static var previews: some View {
        UsersView()
    }
}
