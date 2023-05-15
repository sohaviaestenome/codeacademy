//
//  SwiftUIView.swift
//  Socialcademy
//
//  Created by Pedro Silva on 14/05/2023.
//

import SwiftUI

struct PostsList: View {
    @StateObject var viewModel = PostsViewModel()
 
    @State private var searchText = ""
    @State private var showNewPostForm = false
 
    var body: some View {
        NavigationView {
               List(viewModel.posts) { post in
                if searchText.isEmpty || post.contains(searchText) {
                    PostRow(post: post)
                }
            }
            .searchable(text: $searchText)
            .navigationTitle("Posts")
            .toolbar {
                Button {
                    showNewPostForm = true
                } label: {
                    Label("New Post", systemImage: "square.and.pencil")
                }
            }
        }
        .sheet(isPresented: $showNewPostForm) {
            NewPostForm(createAction: viewModel.makeCreateAction())
        }.onAppear {
            viewModel.fetchPosts()
        }
    }
}

struct PostsList_Previews: PreviewProvider {
    static var previews: some View {
        PostsList()
    }
}
