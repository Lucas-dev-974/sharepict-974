import 'dart:convert';

import 'package:http/http.dart' as http;

class User {
  final String name;
  final String lastname;

  const User({
    this.name,
    this.lastname,
  });

  static User fromJson(Map<String, String> json) =>
      User(
        name: json['name'],
        lastname: json['lastname'],
      );
}

class UserApi{
static  Future<List<User>> getUsers(query) async{
    var uri = Uri.parse('http://127.0.0.1:8080/api/albums/users');

    final response = await http.post(uri,    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },body: jsonEncode(<String, String>{
      'nom': query,

    }) );

    // If the call to the server was successful, parse the JSON.
    // return Partage.fromJson(json.decode(response.body)[0]);

    if (response.statusCode == 200) {
      final List users = json.decode(response.body);

return users;
     /* return users.map((json) => User.fromJson(json)).where((user) {
        final nameLower = user.name.toLowerCase();
        final queryLower = query.toLowerCase();

        return nameLower.contains(queryLower);
      }).toList();*/
    } else {
      throw Exception();
    }
  }
}