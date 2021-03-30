import 'package:flutter/material.dart';

/// The [Favorites] class holds a list of favorite items saved by the user.
class Home extends ChangeNotifier {
  final List<int> _homeItems = [];

  List<int> get items => _homeItems;

  void add(int itemNo) {
    _homeItems.add(itemNo);
    notifyListeners();
  }

  void remove(int itemNo) {
    _homeItems.remove(itemNo);
    notifyListeners();
  }
}