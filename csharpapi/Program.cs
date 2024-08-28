using cppbackend.Repository;
using csharpapi.Models;
using Microsoft.EntityFrameworkCore;
using System.Net.Sockets;

var builder = WebApplication.CreateBuilder(args);

var dbConfig = builder.Configuration.GetConnectionString("PostgreSQL");
// builder.Services.AddDbContext<ContextBase>(options => options.UseSqlServer(dbConfig));
builder.Services.AddDbContext<ContextBase>(options => options.UseNpgsql(dbConfig));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<User>()
    .AddEntityFrameworkStores<ContextBase>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapIdentityApi<User>();

app.MapControllers();
app.Run();