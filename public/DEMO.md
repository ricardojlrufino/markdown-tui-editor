# Teste - Implementação Markdown

Biblioteca para abstração de envio de arquivos

[https://github.com/nhn/tui.editor/issues/2838](https://github.com/nhn/tui.editor/issues/2838)

## mermaid

$$mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end

    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
$$



## PlantUML

$$plantuml

@startuml

' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "Entity01" as e01 {
  *e1_id : number <<generated>>
  --
  *name : text
  description : text
}

entity "Entity02" as e02 {
  *e2_id : number <<generated>>
  --
  *e1_id : number <<FK>>
  other_details : text
  idade : int(3)
}

entity "Entity03" as e03 {
  *e3_id : number <<generated>>
  --
  e1_id : number <<FK>>
  other_details : text
}

e01 ||..o{ e02
e01 |o..o{ e03

@enduml

$$

$$drawio

ok ok ok 

$$


## html

<table><tr><td>
<pre>
asdasd
</pre>
</td>
<tr><td>
<pre>
asdasd
</pre>
</td>
</tr></table>






## Integração:

```xml

  <servers>
    <server>
      <username>** username / email **</username>
      <password>*** Insert encrypted password here ***</password>
      <id>artifactory-release</id>
    </server>
    <server>
      <username>** username / email **</username>
      <password>*** Insert encrypted password here ***</password>
      <id>artifactory-snapshots</id>
    </server>
  </servers>
```

Você pode inicializar o `StorageService` passando `StorageConfigS3`

```java
new StorageServiceS3Impl(new StorageConfigS3(accessKey, secret, bucket, region));
```

Lembre que na sua aplicação você deve referencias a Interface, e injetar a Implementação acima via DI

```java
com.github.ricardojlrufino.cloudfiles.core.CFStorageService
```

Exemplo de quando você serializar ele:

```json
{
	"path": "client1/Seleção_999(762).jpg",
	"url": "https://custom-name-storage.fra1.digitaloceanspaces.com/client1/Sele%C3%A7%C3%A3o_999%28762%29.jpg",
	"md5": "eeUkrUP2WI7L4E/aU5UzJQ=="
}
```

No seu banco de dados é recomendável que você armazene o **path**




