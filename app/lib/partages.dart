import 'package:app/users_partage.dart';
import 'package:flutter/material.dart';
import 'dart:convert';
import 'dart:io';
import 'package:app/appBar.dart';
import 'package:http/http.dart' as http;

import 'MaListe.dart';


class SharedAlbums extends StatefulWidget {
  static String routeName = '/shared';

  @override
  State<StatefulWidget> createState() =>  _SharedAlbums();
}

class _SharedAlbums extends State<SharedAlbums> {

  String endpoint = "http://127.0.0.1:8080";
  String api = "api/user/abumshared";
  List<dynamic> test;
  //Partage  _data;

  Future<List<dynamic>> fetchAlbum() async{
    var uri = Uri.parse('http://127.0.0.1:8080/api/user/share');

    final response = await http.get(uri);

    if (response.statusCode == 200) {
      // If the call to the server was successful, parse the JSON.
      // return Partage.fromJson(json.decode(response.body)[0]);

      List<dynamic> _data=json.decode(response.body);

      return _data;
    } else {
      // If that call was not successful, throw an error.
      throw Exception('Failed to load post');
    }


  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

//print(_data.runtimeType);

  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
        appBar: headerNav('Mes partages', context),

        body: Container(

          child:
          FutureBuilder<List<dynamic>>(
            future: fetchAlbum(), // function where you call your api
            builder: ( context, snapshot) {  // AsyncSnapshot<Your object type>
              if (snapshot.hasData) {

            if( snapshot.data.length >0) {
              return MaListe(snapshot.data[0]["albums_shareds"]);
            }else{

              return Container(
                height: 45,
                color: Colors.tealAccent,
                child: Center(
                  child: Text(
                    'Aucun albums',
                    style: TextStyle(color: Colors.black),
                  ),
                ),
              );
            }
                //return Text(snapshot.data[0].toString());

              } else {
                return Text('Loading...');
              }
            },
          ),
        )
    );
  }
}
