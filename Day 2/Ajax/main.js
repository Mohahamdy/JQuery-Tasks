$('document').ready(function (){
    var flag = true;
    $('#btn').on('click',function(){
        if(flag == true){
            $.ajax("https://reqres.in/api/users?page=2",{
                success: function(Data){
                $.each(Data.data,function(index,item){
                    var tr = $("<tr></tr>");

                    var td1 = $("<td>"+item.id+"</td>")
                    var td2 = $("<td>"+item.email+"</td>")
                    var td3 = $("<td>"+item.first_name+"</td>")
                    var td4 = $("<td>"+item.last_name+"</td>")
                    var td5 = $("<td><img src="+item.avatar+"></td>")
                    
                    tr.append(td1,td2,td3,td4,td5)
                    $('#tbody').append(tr);
                    })
                },
            error:function(data,status,xhr){
                alert("Server has some problems");
                }
            })
            flag = false;
        }

    })
})