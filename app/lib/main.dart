import 'package:app/album.dart';
import 'package:app/home.dart';
import 'package:app/login.dart';
import 'package:app/register.dart';
import 'package:app/models/home.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:app/mespartages.dart';
import 'package:app/partages.dart';
import './home.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<Home>(
      create: (context) => Home(),
      child: MaterialApp(
        title: 'Testing Sample',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        routes: {
          HomePage.routeName: (context) => HomePage(),
          Album.routeName: (context) => Album(),
          MesPartages.routeName: (context) => MesPartages(),
          SharedAlbums.routeName: (context) => SharedAlbums(),
          Login.routeName: (context) => Login(),
          Register.routeName: (context) => Register(),
        },
        initialRoute: HomePage.routeName,
      ),
    );
  }
}