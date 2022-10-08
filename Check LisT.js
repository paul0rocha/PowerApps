ClearCollect(
    restricao;
    {restricao: IsBlank(xo4)};
    {restricao: IsBlank(xo4_4)};
    {restricao: IsBlank(xo4_1)}
);;
Set(
    Varborda;   
    true
);;If
( 
    Dropdown3_2.SelectedText.Date = Label18_1.Text And Dropdown3_1.SelectedText.Hour = Label18.Text;
   Navigate([@xipados_1]) ;
  If(
    CountRows(
        Filter(
            restricao;
            restricao = true
        )
    ) = 0 ;  Patch(
        Table1;
        {
            Date: Label14.Text;
            Event: Label14_1.Text;
            Note_Type: Dropdown2.Selected.Result;
            Minutes: xo4_1.Text;
            Hour: xo4.Text;
            Product: Dropdown1.Selected.Value;
            Turno: Dropdown1_1.Selected.Value;
            User_Pollux: lol2_1.Text;
            Produzido: xo4_2.Text;
            Planejado: Subtitle9_1.Text;
            Coment: xo4_4.Text
        }
    );;Set(
        VarBorda;
        true
    );;
    Set(
        VarReset;
        false
    );;
    Set(
        VarReset;
        true
    );;
    Navigate(
        [@xipados];
        ScreenTransition.Fade
    );
    Notify(
        "Faltam preencher " & CountRows(
            Filter(
                restricao;
                restricao = true
            )
        ) & " Registros";
        NotificationType.Error;
        500
    )))
