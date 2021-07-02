// props = propriedade que a função vai receber do obejto Pai (RepositoryList)
export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>
        Acessar repositórios
      </a>
    </li>
  )
}