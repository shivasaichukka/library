function search()
{
	var num =document.getElementById("hjk").value
		if (num == 1)
		{
			document.getElementById("kjh").setAttribute("href","addbook.html")
		}
			else if (num==2)
			{
				document.getElementById("kjh").setAttribute("href","searchbook.html")
			}
				else if (num==3)
			{
				document.getElementById("kjh").setAttribute("href","updatebook.html")
			}
				else if (num==4)
			{
				document.getElementById("kjh").setAttribute("href","deletebook.html")
			}
}