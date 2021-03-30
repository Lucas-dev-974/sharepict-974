import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:app/album.dart';
class HomePage extends StatelessWidget {
  static String routeName = '/home';


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SharePic974',
      home: Scaffold(
        appBar: AppBar(
          title: Text('SharePic974'),
          actions: <Widget>[
            TextButton.icon(
              style: TextButton.styleFrom(primary: Colors.white),
              onPressed: () {
                Navigator.pushNamed(context, Album.routeName);

              },
              icon: Icon(Icons.account_circle),
              label: Text('Favorites'),
            ),
          ],
        ),
        body: Center(
          child: Text('Hello Home'),
        ),
      ),
    );
  }
}


