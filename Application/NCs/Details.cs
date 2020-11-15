using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.NCs
{
    public class Details
    {
        public class Query : IRequest<NC>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, NC>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<NC> Handle(Query request, CancellationToken cancellationToken)
            {
                var nc = await _context.NCs.FindAsync(request.Id);
                return nc;
            }
        }
    }
}