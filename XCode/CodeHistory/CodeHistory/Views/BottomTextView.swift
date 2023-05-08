//
//  BottomTextView.swift
//  CodeHistory
//
//  Created by Pedro Silva on 08/05/2023.
//

import SwiftUI

struct BottomTextView: View {
    
    let str: String
    var body: some View {
        HStack {
            Spacer()
            Text(str)
                .font(.body)
                .bold()
                .padding()
            Spacer()
        }.background(Color(red: 48/255, green: 105/255, blue: 240/255))
    }
}

struct BottomTextView_Previews: PreviewProvider {
    static var previews: some View {
        BottomTextView(str: "Test")
    }
}
