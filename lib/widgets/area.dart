import 'package:flutter/material.dart';
import 'package:asigar_lp/layout/adaptive.dart';
import 'package:asigar_lp/constants.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_icons/flutter_icons.dart';

class Area extends StatelessWidget {
  Area({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isDesktop = isDisplayDesktop(context);

    return Padding(
        padding: EdgeInsets.all((isDesktop ? 24.0 : 16.0)),
        child: Container(
            // height: (isDesktop ? fullHeight(context) : mobileHeight(context) * 2),
            width: fullWidth(context),
            // color: Colors.white,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.all(24.0),
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding:
                            EdgeInsets.only(bottom: (isDesktop ? 24.0 : 16.0)),
                        child: Center(
                          child: Text(
                            "サービス提供エリア",
                            style: Theme.of(context).textTheme.headline1,
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                      Padding(
                        padding:
                            EdgeInsets.only(bottom: (isDesktop ? 16.0 : 8.0)),
                        child: Center(
                          child: Text(
                            "アスンシオン",
                            style:
                                Theme.of(context).textTheme.headline2.apply(),
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                      Padding(
                        padding:
                            EdgeInsets.only(bottom: (isDesktop ? 16.0 : 8.0)),
                        child: Center(
                          child: Text(
                            "フェルナンドデラモラ",
                            style: Theme.of(context).textTheme.headline2,
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: EdgeInsets.all(24.0),
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding:
                            EdgeInsets.only(bottom: (isDesktop ? 24.0 : 16.0)),
                        child: Center(
                          child: Text(
                            "サービス提供時間",
                            style: Theme.of(context).textTheme.headline1,
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                      Padding(
                        padding:
                            EdgeInsets.only(bottom: (isDesktop ? 16.0 : 8.0)),
                        child: Center(
                          child: Text(
                            "10:00-17:00",
                            style:
                                Theme.of(context).textTheme.headline2.apply(),
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: EdgeInsets.all(24.0),
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding:
                            EdgeInsets.only(bottom: (isDesktop ? 24.0 : 16.0)),
                        child: Center(
                          child: Text(
                            "アプリ",
                            style: Theme.of(context).textTheme.headline1,
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                      Padding(
                        padding:
                            EdgeInsets.only(bottom: (isDesktop ? 16.0 : 8.0)),
                        child: Center(
                          child: Text(
                            "Comming soon...",
                            style:
                                Theme.of(context).textTheme.headline2.apply(),
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            )));
  }
}
