#!/bin/bash
import 'package:app/partages.dart';
import 'package:flutter/material.dart';
import 'package:app/album.dart';
import 'package:app/home.dart';
import 'package:app/login.dart';
import 'package:app/mespartages.dart';
AppBar headerNav(String title, page){
  return AppBar(

    title: Text(title),
    actions: <Widget>[


      PopupMenuButton(
        icon: Icon(Icons.menu),

        itemBuilder: (context) =>
        [

          PopupMenuItem(
            child: TextButton.icon(
              style: TextButton.styleFrom(primary: Colors.black),
              onPressed: () {
                Navigator.pushNamed(page, HomePage.routeName);
              },
              icon: Icon(Icons.account_circle),
              label: Text('Mon compte'),
            ),

          ),

          PopupMenuItem(
            child: TextButton.icon(
              style: TextButton.styleFrom(primary: Colors.black),
              onPressed: () {
                Navigator.pushNamed(page, Album.routeName);
              },
              icon: Icon(Icons.account_circle),
              label: Text('Mes albums'),
            ),
          ),
          PopupMenuItem(
            child: TextButton.icon(
              style: TextButton.styleFrom(primary: Colors.black),
              onPressed: () {
                Navigator.pushNamed(page, Login.routeName);
              },
              icon: Icon(Icons.account_circle),
              label: Text('Login'),
            )
          ),
          PopupMenuItem(
            child: TextButton.icon(
              style: TextButton.styleFrom(primary: Colors.black),
              onPressed: () {
                Navigator.pushNamed(page, MesPartages.routeName);
              },
              icon: Icon(Icons.account_circle),
              label: Text('Mes partages'),
            ),
          ),
          PopupMenuItem(
            child: TextButton.icon(
              style: TextButton.styleFrom(primary: Colors.black),
              onPressed: () {
                Navigator.pushNamed(page, SharedAlbums.routeName);
              },
              icon: Icon(Icons.account_circle),
              label: Text('Partage avec moi'),
            ),
          )
        ],
      ),
    ],
  );
}

