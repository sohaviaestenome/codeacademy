//
//  SwiftUIView.swift
//  Socialcademy
//
//  Created by Pedro Silva on 14/05/2023.
//

import SwiftUI

struct PostsList: View {
    private var posts = [Post.testPost]
 
    var body: some View {
        NavigationView {
            List(posts) { post in
                Text(post.content)
            }
            .navigationTitle("Posts")
        }
    }
}

struct PostsList_Previews: PreviewProvider {
    static var previews: some View {
        PostsList()
    }
}
