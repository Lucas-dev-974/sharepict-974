import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_typeahead/flutter_typeahead.dart';
import "package:app/user_api.dart";
class AddShareUser extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _AddShareUser();
  }
}

class _AddShareUser extends State<AddShareUser> {
  List<dynamic> user=[];



  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
        child: ElevatedButton(
            child: Text("add user"),
            onPressed: () {
              showDialog(
                  context: context,
                  builder: (context) {
                    return Dialog(

                          child: Column(

                            children: [
                              TypeAheadField<User>(
                                hideSuggestionsOnKeyboardHide: false,
                                textFieldConfiguration: TextFieldConfiguration(
                                  decoration: InputDecoration(
                                    prefixIcon: Icon(Icons.search),
                                    border: OutlineInputBorder(),
                                    hintText: 'Search Username',
                                  ),
                                ),
                                suggestionsCallback: UserApi.getUsers,
                                itemBuilder: (context, User suggestion) {
                                  final user = suggestion;

                                  return ListTile(
                                    title: Text(user.name),
                                  );
                                },
                                noItemsFoundBuilder: (context) => Container(
                                  height: 100,
                                  child: Center(
                                    child: Text(
                                      'No Users Found.',
                                      style: TextStyle(fontSize: 24),
                                    ),
                                  ),
                                ),
                                onSuggestionSelected: (User suggestion) {
                                  final user = suggestion;

                                  ScaffoldMessenger.of(context)
                                    ..removeCurrentSnackBar()
                                    ..showSnackBar(SnackBar(
                                      content: Text('Selected user: ${user.name}'),
                                    ));
                                },
                              )

                            ],),

                    );
                  });
            }));
  }
}